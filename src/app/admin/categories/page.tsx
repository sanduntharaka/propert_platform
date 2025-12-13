import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import ConfirmButton from "../_components/ConfirmButton";

// CREATE
async function createCategory(formData: FormData) {
  "use server";
  const name = String(formData.get("name") || "").trim();
  const description = String(formData.get("description") || "").trim();
  const parentIdRaw = String(formData.get("parentId") || "");
  const parentId = parentIdRaw ? Number(parentIdRaw) : null;

  if (!name) return;
  await prisma.category.create({
    data: { name, description: description || null, parentId },
  });
  revalidatePath("/admin/categories");
}

// UPDATE
async function updateCategory(formData: FormData) {
  "use server";
  const id = Number(formData.get("id"));
  const name = String(formData.get("name") || "").trim();
  const description = String(formData.get("description") || "").trim();
  const parentIdRaw = String(formData.get("parentId") || "");
  const parentId = parentIdRaw ? Number(parentIdRaw) : null;

  if (!id || !name) return;

  // avoid setting parent = self
  await prisma.category.update({
    where: { id },
    data: {
      name,
      description: description || null,
      parentId: parentId === id ? null : parentId,
    },
  });
  revalidatePath("/admin/categories");
}

// DELETE
async function deleteCategory(formData: FormData) {
  "use server";
  const id = Number(formData.get("id"));
  if (!id) return;

  // Optional: set children parent to null when deleting
  await prisma.category.updateMany({
    where: { parentId: id },
    data: { parentId: null },
  });

  await prisma.category.delete({ where: { id } });
  revalidatePath("/admin/categories");
}

export default async function AdminCategoriesPage() {
  const categories =
    (await prisma.category.findMany({
      include: { parent: true, _count: { select: { children: true } } },
      orderBy: [{ parentId: "asc" }, { name: "asc" }],
    })) || [];

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-xl font-semibold mb-3">Create Category</h2>
        <form action={createCategory} className="grid gap-3 max-w-xl">
          <input
            name="name"
            placeholder="Name"
            required
            className="border rounded px-3 py-2"
          />
          <textarea
            name="description"
            placeholder="Description (optional)"
            className="border rounded px-3 py-2"
          />
          <select name="parentId" className="border rounded px-3 py-2">
            <option value="">No parent</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.parent ? `${c.parent.name} › ${c.name}` : c.name}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="bg-black text-white rounded px-4 py-2 w-fit"
          >
            Add
          </button>
        </form>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">All Categories</h2>
        <div className="overflow-x-auto">
          <table className="w-full border text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="border px-3 py-2 text-left">Name</th>
                <th className="border px-3 py-2 text-left">Parent</th>
                <th className="border px-3 py-2 text-left">Children</th>
                <th className="border px-3 py-2 text-left">Description</th>
                <th className="border px-3 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((c) => (
                <tr key={c.id} className="align-top">
                  <td className="border px-3 py-2">{c.name}</td>
                  <td className="border px-3 py-2">
                    {c.parent ? (
                      c.parent.name
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>
                  <td className="border px-3 py-2 text-center">
                    {c._count.children}
                  </td>
                  <td className="border px-3 py-2 whitespace-pre-wrap">
                    {c.description || <span className="text-gray-400">—</span>}
                  </td>
                  <td className="border px-3 py-2">
                    <details>
                      <summary className="cursor-pointer select-none mb-2">
                        Edit
                      </summary>
                      <form action={updateCategory} className="grid gap-2">
                        <input type="hidden" name="id" value={c.id} />
                        <input
                          name="name"
                          defaultValue={c.name}
                          required
                          className="border rounded px-2 py-1"
                        />
                        <textarea
                          name="description"
                          defaultValue={c.description ?? ""}
                          className="border rounded px-2 py-1"
                        />
                        <select
                          name="parentId"
                          defaultValue={c.parentId ?? ""}
                          className="border rounded px-2 py-1"
                        >
                          <option value="">No parent</option>
                          {categories
                            .filter((x) => x.id !== c.id) // don't allow self-parent
                            .map((x) => (
                              <option key={x.id} value={x.id}>
                                {x.parent
                                  ? `${x.parent.name} › ${x.name}`
                                  : x.name}
                              </option>
                            ))}
                        </select>
                        <button
                          type="submit"
                          className="bg-gray-900 text-white rounded px-3 py-1 w-fit"
                        >
                          Save
                        </button>
                      </form>
                    </details>

                    <form action={deleteCategory}>
                      <input type="hidden" name="id" value={c.id} />
                      <ConfirmButton
                        type="submit"
                        className="mt-2 bg-red-600 text-white rounded px-3 py-1 w-fit"
                        confirmText="Delete this category?"
                      >
                        Delete
                      </ConfirmButton>
                    </form>
                  </td>
                </tr>
              ))}
              {categories.length === 0 && (
                <tr>
                  <td
                    className="border px-3 py-6 text-center text-gray-500"
                    colSpan={5}
                  >
                    No categories yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

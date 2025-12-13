"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { createNewsAction } from "../actions";

import dynamic from "next/dynamic";

const RichTextEditor = dynamic(
  () => import("../../_components/RichTextEditor"),
  {
    ssr: false,
    loading: () => <div className="text-sm text-gray-500">Editor loading…</div>,
  }
);

type CategoryOption = { id: string; name: string; subcategories: string[] };

export default function CreateNewsClient({
  categories,
}: {
  categories: CategoryOption[];
}) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    content: "",
    excerpt: "",
    category: "",
    subcategory: "",
    tags: "",
    published: false,
  });
  const [subcategories, setSubcategories] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value, type } = e.target;
    const val =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

    setFormData((prev) => ({ ...prev, [name]: val }));

    if (errors[name]) {
      const n = { ...errors };
      delete n[name];
      setErrors(n);
    }

    if (name === "category") {
      const selected = categories.find((cat) => cat.name === value);
      setSubcategories(selected ? selected.subcategories : []);
      setFormData((prev) => ({ ...prev, subcategory: "" }));
    }

    if (name === "title") {
      const slug = value
        .toLowerCase()
        .replace(/[^a-z0-9 -]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
      setFormData((prev) => ({ ...prev, slug }));
    }
  }

  function handleContentChange(value: string) {
    setFormData((prev) => ({ ...prev, content: value }));
    if (!formData.excerpt && value) {
      const excerpt = value.replace(/<[^>]*>/g, "").substring(0, 160) + "...";
      setFormData((prev) => ({ ...prev, excerpt }));
    }
  }

  function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImagePreview(url);
      if (errors.image) {
        const n = { ...errors };
        delete n.image;
        setErrors(n);
      }
    }
  }

  function validateForm() {
    const n: Record<string, string> = {};
    if (!formData.title) n.title = "Title is required";
    if (!formData.category) n.category = "Category is required";
    if (!fileInputRef.current?.files?.length)
      n.image = "Banner image is required";
    if (!formData.tags) n.tags = "At least one tag is required";
    if (!formData.content || formData.content === "<p><br></p>")
      n.content = "Content is required";
    setErrors(n);
    return Object.keys(n).length === 0;
  }

  return (
    <section className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Create New News</h1>
        <button
          type="button"
          onClick={() => router.back()}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors flex items-center gap-2"
        >
          {/* back chevron */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to List
        </button>
      </div>

      {/* Post to server action; include multipart for file */}
      <form
        action={async (fd) => {
          if (!validateForm()) return;
          await createNewsAction(fd);
        }}
        encType="multipart/form-data"
        className="bg-white p-6 rounded-lg shadow-md"
      >
        {/* Hidden input to send HTML content */}
        <input type="hidden" name="content" value={formData.content} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="md:col-span-2">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              className={`w-full p-2 border ${
                errors.title ? "border-red-500" : "border-gray-300"
              } rounded-md`}
              value={formData.title}
              onChange={handleChange}
            />
            {errors.title && (
              <p className="mt-1 text-sm text-red-600">{errors.title}</p>
            )}
          </div>

          <div className="md:col-span-2">
            <label
              htmlFor="slug"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Slug *
            </label>
            <input
              type="text"
              id="slug"
              name="slug"
              required
              className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
              value={formData.slug}
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Category *
            </label>
            <select
              id="category"
              name="category"
              required
              className={`w-full p-2 border ${
                errors.category ? "border-red-500" : "border-gray-300"
              } rounded-md`}
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">Select a category</option>
              {categories.map((c) => (
                <option key={c.id} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="mt-1 text-sm text-red-600">{errors.category}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="subcategory"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Subcategory
            </label>
            <select
              id="subcategory"
              name="subcategory"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.subcategory}
              onChange={handleChange}
              disabled={!formData.category}
            >
              <option value="">Select a subcategory</option>
              {subcategories.map((s, i) => (
                <option key={i} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Banner Image *
            </label>
            <input
              type="file"
              name="image"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              onChange={handleImageUpload}
            />
            <div className="flex items-center justify-center w-full">
              {imagePreview ? (
                <div className="relative w-full h-64">
                  <Image
                    src={imagePreview}
                    alt="Banner preview"
                    fill
                    className="object-cover rounded-md"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="absolute top-2 right-2 bg-blue-600 text-white p-2 rounded-md"
                  >
                    Change Image
                  </button>
                </div>
              ) : (
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className={`flex flex-col items-center justify-center w-full h-64 border-2 ${
                    errors.image
                      ? "border-red-500"
                      : "border-dashed border-gray-300"
                  } rounded-md cursor-pointer hover:border-gray-400`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="mt-2 text-sm text-gray-600">
                    Click to upload a banner image
                  </p>
                </div>
              )}
            </div>
            {errors.image && (
              <p className="mt-1 text-sm text-red-600">{errors.image}</p>
            )}
          </div>

          <div className="md:col-span-2">
            <label
              htmlFor="tags"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Tags (comma-separated) *
            </label>
            <input
              type="text"
              id="tags"
              name="tags"
              required
              className={`w-full p-2 border ${
                errors.tags ? "border-red-500" : "border-gray-300"
              } rounded-md`}
              value={formData.tags}
              onChange={handleChange}
              placeholder="e.g. market, trends, analysis"
            />
            {errors.tags && (
              <p className="mt-1 text-sm text-red-600">{errors.tags}</p>
            )}
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="excerpt"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Excerpt *
          </label>
          <textarea
            id="excerpt"
            name="excerpt"
            required
            rows={3}
            className="w-full p-2 border border-gray-300 rounded-md"
            value={formData.excerpt}
            onChange={handleChange}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Content *
          </label>
          <RichTextEditor
            value={formData.content}
            onChange={handleContentChange}
            placeholder="Write your news content here..."
            error={errors.content}
          />
        </div>

        <div className="mb-6">
          <div className="flex items-center">
            <input
              id="published"
              name="published"
              type="checkbox"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              checked={formData.published}
              onChange={handleChange}
            />
            <label
              htmlFor="published"
              className="ml-2 block text-sm text-gray-700"
            >
              Publish immediately
            </label>
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            Create News
          </button>
        </div>
      </form>
    </section>
  );
}

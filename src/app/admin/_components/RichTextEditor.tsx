"use client";

import { useState, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
}

export default function RichTextEditor({
  value,
  onChange,
  placeholder,
  error,
}: RichTextEditorProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [apiKey] = useState("eymbuxq2gpe1p0jbo2ma6o6ftebi2wzegd13x0w8praoetbj"); // community key

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) {
    return (
      <div
        className={`h-96 border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-md p-4 bg-gray-100 animate-pulse`}
      >
        Loading editor...
      </div>
    );
  }

  return (
    <div className={`${error ? "border-red-500 rounded-md" : ""}`}>
      <Editor
        apiKey={apiKey}
        value={value}
        onEditorChange={onChange}
        init={{
          height: 384,
          menubar: false,
          // ✅ plugins for images & pasting
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "help",
            "wordcount",
            "paste",
          ],
          toolbar:
            "undo redo | blocks | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | image media link | removeformat | code fullscreen",

          // ✅ allow paste/drag images
          automatic_uploads: true,
          paste_data_images: true,
          file_picker_types: "image",
          images_file_types: "jpeg,jpg,png,webp,gif",

          // ✅ upload handler (TinyMCE calls this whenever an image is inserted)
          images_upload_handler: async (blobInfo, _progress) => {
            const file = blobInfo.blob();
            const fd = new FormData();
            // Use original filename if present (fallback to generic)
            fd.append("file", file, (file as any).name || "image.png");

            const res = await fetch("/api/uploads/rte", {
              method: "POST",
              body: fd,
            });

            const json = await res.json();
            if (!res.ok || !json?.location) {
              throw new Error(json?.message || "Image upload failed");
            }
            return json.location; // TinyMCE inserts <img src="location" />
          },

          // (Optional) custom file picker button still uses the same handler
          file_picker_callback: (cb) => {
            const input = document.createElement("input");
            input.type = "file";
            input.accept = "image/*";
            input.onchange = async () => {
              const file = input.files?.[0];
              if (!file) return;
              const fd = new FormData();
              fd.append("file", file, file.name);
              const res = await fetch("/api/uploads/rte", {
                method: "POST",
                body: fd,
              });
              const json = await res.json();
              if (res.ok && json?.location)
                cb(json.location, { title: file.name });
            };
            input.click();
          },

          placeholder: placeholder || "Write your content here...",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",

          // Dark-mode friendly skin if you need it:
          skin:
            typeof window !== "undefined" &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
              ? "oxide-dark"
              : "oxide",
          content_css:
            typeof window !== "undefined" &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
              ? "dark"
              : "default",
        }}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}

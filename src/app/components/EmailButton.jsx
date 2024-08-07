import { EnvelopeIcon } from "@heroicons/react/20/solid";

export default function EmailButton() {
  return (
    <>
      <button
        type="button"
        className="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <span className="absolute -inset-1.5" />

        <EnvelopeIcon aria-hidden="true" className="h-6 w-6" />
      </button>
    </>
  );
}

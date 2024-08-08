import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function EmailButton() {
  return (
    <>
      <a href="/contact">
        <div className="flex flex-row ml-4">
          <EnvelopeIcon className="text-black h-6 mt-2 ml-" />
          <p className="pt-2 pl-2 text-black">Email</p>{" "}
        </div>
      </a>
    </>
  );
}

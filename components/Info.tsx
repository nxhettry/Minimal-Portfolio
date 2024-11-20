import Image from "next/image";

const Info = () => {
  return (
    <section className="flex flex-col items-center text-center px-6 py-20 max-w-3xl mx-auto">
      <div className="rounded-full h-44 w-44 overflow-hidden flex items-center justify-center mb-6">
        <Image
          height={500}
          width={500}
          src="/photo.png"
          alt="Nishan Gautam"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <p className="mt-4 text-gray-600 dark:text-gray-200 max-w-xl">
        I build reliable and user-friendly software, turning ideas into digital
        solutions.
      </p>
    </section>
  );
};

export default Info;

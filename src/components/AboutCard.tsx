import Image from "next/image";

export default function AboutCard() {
  return (
    <section className="w-full p-6 md:p-8 flex flex-col lg:flex-row items-center bg-sba-dark-red text-white">
      {/* Image container: stacks on top for mobile, shifts to left on large screens */}
      <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
        <Image
          src="/sba_logo_background.png"
          alt="Sports Business Association logo"
          width={1200}
          height={600}
          className="w-full h-auto object-contain lg:ml-6"
        />
      </div>

      {/* Text container: stacks below for mobile, shifts to right on large screens */}
      <div className="w-full lg:w-1/2 px-2 md:px-6">
        <h2 className="mt-4 text-2xl md:text-3xl font-bold text-center lg:text-left">
          About SBA (Sample Text & Image)
        </h2>

        <p className="my-6 text-sm md:text-base font-sans text-white/90 leading-relaxed text-left">
          lorem ipsum dolor sit amet consectetur adipiscing elit dignissimos culpa dolore 
          autem sunt dolore culpa provident est dolorum et culpa officia imperdiet nihil 
          distinctio culpa labore mollitia optio ducimus do tempore vel et iusto dolore 
          possimus ut quidem voluptate eum occaecat repellendus odio eu corrupti quis maxime 
          qui libero quo et laboris et consectetur deleniti quis dolore eu quis occaecat sunt 
          et fuga sunt amet et dolorum consectetur id maxime in provident quo eiusmod esse ducimus 
          eos commodo at et officia et esse consectetur consequat nam similique quas excepteur
          
          <br/><br/>

          praesentium esse dignissimos exercitation temporibus mollit possimus et est quidem 
          soluta deserunt nisi imperdiet nostrud at laborum qui enim laborum et imperdiet et 
          dolorem quos anim consequatur ex omnis est velit voluptas qui nihil in laboris dolor 
          veniam odio sit quo nihil eu harum et placeat qui eos cumque pariatur sunt eiusmod rerum 
          ullamco libero magna ut atque non odio et accusamus ipsum qui dolor velit animi deleniti 
          velit quos ut esse et dolorum laboris magna expedita ea anim consequat ea quos blanditiis
        </p>
      </div>
    </section>
  );
}
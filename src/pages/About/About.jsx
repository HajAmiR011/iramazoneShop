import Header from "../../components/Header/Header";

const About = () => {
  return (
    <>
      <Header setter={null} submit={null} />
      <div className="my-5 bg-white flex flex-col items-center p-5 rounded-lg shadow-lg w-[90%] md:w-[75%] mx-auto gap-3">
        <h1 className="font-bold text-3xl">About</h1>
        <p className="font-semibold text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          doloremque sit molestiae vero. Minus necessitatibus aperiam officiis.
          Vel, saepe molestiae laboriosam cupiditate sequi enim molestias quos
          odit eaque in! Ullam minus expedita iste quo mollitia eaque modi,
          dolorum tempora. Velit a illo suscipit tempore. Reiciendis, ut illo?
          Maiores veritatis magnam a, minus aspernatur harum ex beatae
          necessitatibus ratione sit iusto unde fugit voluptates ea. Atque
          dolor, perferendis illum necessitatibus eaque facilis accusamus iusto
          nisi esse mollitia quia, ad omnis possimus magnam corrupti officiis
          sed facere deleniti incidunt hic reiciendis. Impedit quis consectetur
          minus quasi dolores! Placeat consequuntur, vero recusandae impedit
          iste sit pariatur ab rem maxime necessitatibus fuga officiis nam nobis
          suscipit totam, modi velit blanditiis? Aut voluptas ipsam, laudantium
          dolor ratione ullam sit aperiam distinctio rem unde vel ipsa?
          Doloremque, est atque vel blanditiis reprehenderit unde. Sunt dolorum
          temporibus cupiditate consequuntur a earum magnam. Vel id consectetur
          eum eos cum a in aliquid laudantium voluptates. Aspernatur eos
          deserunt iste accusantium repudiandae, commodi quo veritatis
          consequuntur cupiditate aliquam ex voluptatibus exercitationem itaque
          obcaecati odio praesentium sint, suscipit illum, quisquam consectetur!
          Incidunt doloribus harum alias obcaecati. Sit ad eius quasi est qui
          voluptas, recusandae porro a asperiores velit unde quis blanditiis.
        </p>
        <a
          href="https://github.com/HajAmiR011"
          className="px-7 py-2 rounded-lg text-white bg-green-500 transition-all hover:bg-[deeppink] duration-300"
        >
          HajAmiR011
        </a>
      </div>
    </>
  );
};

export default About;

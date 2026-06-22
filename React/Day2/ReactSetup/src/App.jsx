import React from "react"

function App()
{
  return (
    < >
      <Navbar />
      {/* {navbar()} */}
      <MainCOntent />
      <Footer />
    </>
  )
}


function Navbar()
{
  let name = "Shubham"
  return <nav> Welcome, {name}</nav>
}


function MainCOntent()
{
  return <main>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat labore velit eaque aliquam culpa architecto repellendus, sunt nostrum exercitationem, vitae est ipsa tempore corporis incidunt ratione temporibus molestias excepturi hic.
    Ratione incidunt consectetur eligendi doloremque ad et mollitia iste nostrum laborum iure dolorem odit quisquam, sapiente odio velit ipsam? Sunt, aliquid. Mollitia distinctio illo nisi sed in tempore odit molestiae.
    Quia quos at quam ipsa rerum veniam repellendus dicta eveniet? Qui exercitationem, repellendus sunt nulla nobis non expedita eos eligendi sapiente consequuntur earum libero commodi dicta voluptas nam accusamus cumque.
    Ab cupiditate maxime ad nisi dolor minima iste tenetur repudiandae, eligendi enim sapiente sint culpa! Atque quam iste at voluptatibus magnam cum debitis soluta illum? Deserunt, quam eveniet? Modi, labore.
    Veniam maxime explicabo vero inventore necessitatibus corrupti et distinctio cumque at ab molestiae incidunt minima illo laboriosam aut dolores iusto ipsum a quaerat fuga provident voluptates, quam officiis. Rem, veniam?
  </main>
}

function Footer()
{
  return <footer>This is my footer</footer>
}

export default App


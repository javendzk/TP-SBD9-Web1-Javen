import { useEffect } from 'react'
import './App.css'
import NavbarJaven from './elements/navbarJaven'

function App() {
  // Define Response data directly in the component
  const Response = {
    page: 1,
    results: [
      {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
        image: "https://picsum.photos/500?random=1",
      },
      {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla",
        image: "https://picsum.photos/500?random=2",
      },
      {
        userId: 1,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut",
        image: "https://picsum.photos/500?random=3",
      },
      {
        userId: 1,
        id: 4,
        title: "eum et est occaecati",
        body: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
        image: "https://picsum.photos/500?random=4",
      },
      {
        userId: 1,
        id: 5,
        title: "nesciunt quas odio",
        body: "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque",
        image: "https://picsum.photos/500?random=5",
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <NavbarJaven />
      
      {/* Hero Section */}
      <div className="gradient-background min-h-screen flex flex-col items-center justify-center px-4 py-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-6">
          Welcome to javendzk's demo
        </h1>
        <p className="text-white font-thin text-center max-w-2xl px-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.
        </p>
      </div>
      
      {/* Cards Section */}
      <div className="bg-white py-16 sm:py-20 px-4 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-8 sm:mb-10 text-center">
            Very Cool Cards.
          </h2>
          
          {/* Updated grid to be responsive: 1 column on mobile, 2 on tablet, 3 on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {Response.results.map((card) => (
              <div key={card.id} className="bg-gray-100 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 h-full flex flex-col">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold mb-2 line-clamp-2">{card.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">{card.body}</p>
                  <button className="mt-auto px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors w-full sm:w-auto">
                    Read more
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App

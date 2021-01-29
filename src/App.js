import './App.css';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Layout from "./components/layout/layout";
import bg1 from "./assets/bg1.jpg"
import bg2 from "./assets/bg2.jpg"
import bg3 from "./assets/bg3.jpg"
import PokemonCard from "./components/pockemoncard/pokemoncard";
import POKEMONS from "./components/pockemoncard/data.json"

const title = 'This is Title'
const desc = 'This is Descriptions'
const colorBg1 = 'red';
const colorBg2 = 'green';
const colorBg3 = 'blue';

const App = () => {
  return (
      <>
          <Header title={title} desc={desc}/>
          <Layout
              title={title}
              urlBg={bg1}
              colorBg={colorBg1}
              id='layoutCont1'
              useBg='color'
          >
              <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
                  Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p>

              <p>To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color.
                  To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks'
                  of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card,
                  the player's card will be captured and turned into the opponent's color. If the player's rank is higher,
                  the opponent's card will be captured and changed into the player's color instead.</p>
          </Layout>
          <Layout
              title={title}
              urlBg={bg2}
              colorBg={colorBg2}
              id='layoutCont2'
              useBg='pic'
          >
              <div className="flex">
                  {
                      POKEMONS.map((item) => <PokemonCard key={item.id} name={item.name} img={item.img} id={item.id} type={item.type} values={item.values}/>)
                  }
              </div>

          </Layout>
          <Layout title={title} desc={desc} urlBg={bg3} colorBg={colorBg3} id='layoutCont3' useBg='pic'
          >
              <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
                  Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p>

              <p>To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color.
                  To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks'
                  of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card,
                  the player's card will be captured and turned into the opponent's color. If the player's rank is higher,
                  the opponent's card will be captured and changed into the player's color instead.</p>

          </Layout>
          <Footer />
      </>
  );
}

export default App;

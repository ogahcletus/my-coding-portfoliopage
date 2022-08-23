import Header from './Components/Header';
import Container from './Components/Styles/Container.styled';
import {ThemeProvider} from 'styled-components';
import GlobalStyles from './Components/Styles/Global';
import content from './content';
import Card from './Components/Card';
import Footer from './Components/Footer';



const theme = {
  colors: {
    header:'#00008B',
    body: '#fff',
    footer: '#00008B'
  },

    mobile: '768px',

}

  function App() {
    return (
      <ThemeProvider  theme={theme}>
      <>
      <GlobalStyles />
      <Header />
    <Container>
      {content.map((item, index) => (

        <Card  key={index}  item={item}/>

      ))}
    </Container>

    <Footer />

    </>
    </ThemeProvider>
  );
}

export default App;

import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

//redux
import { setWindowSize } from './features/window/windowSlice';
import { toggleTheme } from './features/theme/themeSlice';
import { setAddress, selectAddressParameter, selectScroll, setScroll } from './features/address/addressSlice';

//hooks
import useHashText from './hooks/useHashText';

//navs
import NavBar from './components/NavBar/NavBar';

//style
import theme from './theme';
import GlobalStyle from './GlobalStyle';

//pages
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Home from './pages/Home';

const pages = {
  home: <Home key={`home-page`} />,
  about: <About key={`about-page`} />,
  experience: <Experience key={`experience-page`} />,
  projects: <Projects key={`projects-page`} />,
  contact: <Contact key={`contact-page`} />,
};

function App() {
  const dispatch = useDispatch();
  const hashText = useHashText();
  const activeTheme = useSelector((state) => state.theme);
  const addressParameter = useSelector(selectAddressParameter);
  const pageRefs = useRef({});
  const [observer, setObserver] = useState(null);
  const [firstLoad, setFirstLoad] = useState(true);
  const scroll = useSelector(selectScroll);

  //observer to watch for component scroll
  useEffect(() => {
    if (observer !== null) {
      Object.values(pageRefs.current).forEach((pageRef) => observer.observe(pageRef));
    }
    return () => {
      if (observer !== null) {
        Object.values(pageRefs.current).forEach((pageRef) => observer.unobserve(pageRef));
      }
    };
  }, [observer]);

  //watch components scroll into view
  useEffect(() => {
    setObserver(
      new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              const pageKey = Object.keys(pageRefs.current).find((key) => pageRefs.current[key] === entry.target);
              hashText(pageKey);
              break;
            }
          }
        },
        { threshold: 0.9 }
      )
    );
  }, []);

  useEffect(() => {
    const handleResize = () => {
      dispatch(setWindowSize({ width: window.innerWidth, height: window.innerHeight }));
    };
    const handleAddressChange = (event) => {
      dispatch(setAddress(event.newURL));
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('hashchange', handleAddressChange);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('hashchange', handleAddressChange);
    };
  }, []);

  useEffect(() => {
    if (!scroll) {
      const pageRef = pageRefs.current[addressParameter];
      if (pageRef) {
        pageRef.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    } else {
      console.log(scroll, addressParameter);
      const pageRef = pageRefs.current[scroll];
      pageRef.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      if (addressParameter === scroll) {
        dispatch(setScroll(''));
      }
    }
  }, [addressParameter, scroll]);

  return (
    <ThemeProvider theme={theme[activeTheme]}>
      <GlobalStyle />
      <div className="App">
        <NavBar />
        {Object.entries(pages).map(([key, page]) => (
          <div ref={(ref) => (pageRefs.current[key] = ref)} key={key}>
            {page}
          </div>
        ))}
      </div>
    </ThemeProvider>
  );
}

export default App;

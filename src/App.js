import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Header from "./Header";
import HomePage from "./HomePage";
import SessionsPage from "./SessionsPage";
import SeatsPage from "./SeatsPage";
import SuccessPage from "./SuccessPage";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <AppStyle>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sessoes/:movieId" element={<SessionsPage />} />
            <Route path="/assentos/:sessionId" element={<SeatsPage />} />
            <Route path="/sucesso" element={<SuccessPage />} />
          </Routes>
        </AppStyle>
      </BrowserRouter>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
button{
  font:inherit;
  border: none;
}
`;

const AppStyle = styled.div`
  width: 100vh;
`;
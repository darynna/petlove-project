import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100%;
padding: 0 32px;
margin: 0 auto;
max-width: 320px;

@media (min-width: 428px) and (max-width: 767px) {
  max-width:767px;
  padding: 0 12px;
}
@media (min-width: 768px) {
  max-width: 1216px;
}


`;
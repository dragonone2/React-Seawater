import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


function Home() {
  const dispatch = useDispatch();
  let seaAreas = useSelector((state) => state.sea); // cart는 store에서 가져온 데이터
  let [selectId, setSelectId] = useState("0");
  const [isDropdownView, setDropdownView] = useState(false);

  const handleClickContainer = () => {
    setDropdownView(!isDropdownView);
  };

  const handleBlurContainer = () => {
    setTimeout(() => {
      setDropdownView(false);
    }, 100);
  };

  const handleDropdownItemClick = (selectedId) => {
    setSelectId(selectedId);
    setDropdownView(false);
  };

  return (
    <Container>
      <Row>
        <Card>
          <Card.Body>
            <Data selectId={selectId} />
          </Card.Body>
        </Card>
        <div className="container" onBlur={handleBlurContainer}>
          <label onClick={handleClickContainer}>
            <button  class="btn btn-secondary">Dropdown Menu{isDropdownView ? "▲" : "▼"}</button>
          </label>
          {isDropdownView && (
            <div className="dropdown">
            <Dropdown  handleItemClick={handleDropdownItemClick} />
            </div>
          )}
        </div>

        
      </Row>
      
    </Container>
  );
}

function Dropdown({ handleItemClick }) {
  let seaAreas = useSelector((state) => state.sea);
  return (
    <>
      {seaAreas.map((a,i) => (
        <div className="dropdown-item" key={seaAreas[i].id} onClick={() => handleItemClick(seaAreas[i].id)}>
          {seaAreas[i].name}
          
        </div>
      ))}
    </>
  );
}

function Data(props) {
  let seaAreas = useSelector((state) => state.sea);
  const selectedArea = seaAreas.find((area) => area.id === props.selectId);

  return (
    <>
      {selectedArea && (
         <>
           <p>지역 이름: {selectedArea.name}</p>
           <p>위도: {selectedArea.latitude}</p>
           <p>경도: {selectedArea.longitude}</p>
        </>
      )}
    </>
  );
}

export default Home;

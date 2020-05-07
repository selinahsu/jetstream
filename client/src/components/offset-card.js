import React from 'react';

import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

import '../pages/Result.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function OffsetCard(props) {
  return (
    <Card className="p-5">
      <h4>Offset your emissions!</h4>
      <p>You can help offset your carbon emissions by donating to one of the following 
        sustainability-focused non-profits. Based on your flight data, donating 
        $23 
        would be enough to your CO<sub>2</sub> footprint. 
      </p>
      <Row className="justify-content-between mx-1">
      <a href="https://onetreeplanted.org/">
        <img src="https://globescan.com/wp-content/uploads/2019/07/OneTreePlanted-logo-square-green-200x200.png"
          alt="One Tree Planted"
          target="_blank"
          height="95"
        />
      </a>
      <a href="https://treecanada.ca">
        <img src="https://treecanada.ca/wp-content/uploads/2017/11/TCLogos_Green-Eng-1025x475-green.png"
          alt="Tree Canada"
          target="_blank"
          height="100"
        />
      </a>
      <a href="https://teamtrees.org/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Team_Trees_circle_logo.svg/1200px-Team_Trees_circle_logo.svg.png"
          alt="#TeamTrees"
          target="_blank"
          height="100"
        />
      </a>
      </Row>
    </Card>
  );
}

export default OffsetCard;
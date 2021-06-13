import React from 'react';
import { Container, Button } from 'react-bootstrap'
import { Stage, Layer, Line } from 'react-konva';

import './styles/App.css';
import colors from './styles/colors';
import dimensions from './styles/dimensions';
import Point from './components/Point'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      points: [],
      lines: []
    }
  }

  closePoint = point => {
    return this.state.points.find(_point => Math.abs(point.x - _point.x) < dimensions.pointRadius*2 && Math.abs(point.y - _point.y) < dimensions.pointRadius*2);
  }
  
  handleStageClick = e => {
    let {x, y} = e.currentTarget.getPointerPosition();

    if (this.closePoint({x, y})) {
      return;
    }

    this.setState({ points: [ {x, y}, ...this.state.points ] });
  };

  handleClearClick = () => {
    this.setState({ points: [] });
  }

  handleNextStepClick = () => {
    // api.server.getIterator(this.state.points);
    console.log("Reaching for iterator for", this.state.points.length, "points to API.");
  }

  handleAnimateClick = () => {
    // api.server.getIterator(this.state.points);
    console.log("Sending", this.state.points.length, "points to API to animate.");
  }

  handleResultClick = () => {
    // api.server.getResult(this.state.points);
    console.log("Reaching for result for", this.state.points.length, "points to API.");
  }

  handleRandomizeClick = () => {
    const randomPoint = (maxX, maxY) => {
      return {
        x: Math.random() * maxX,
        y: Math.random() * maxY
      }
    }

    let randomPoints = [];
    for (let i = 0; i < 10; i++) {
      randomPoints.push(
        randomPoint(
          window.innerWidth * dimensions.canvasWidthMultiplier,
          window.innerHeight * dimensions.canvasHeigthMultiplier)
        )
    }

    this.setState({ points: [ ...randomPoints, ...this.state.points ] });
  }

  render() {
    let readyToStart = this.state.points.length >= 3;

    return (
      <Container fluid className="p-0 app d-flex flex-column">
          <Stage
            width={window.innerWidth * dimensions.canvasWidthMultiplier}
            height={window.innerHeight * dimensions.canvasHeigthMultiplier}
            className="canvas m-4 mb-0 p-0"
            style={{ backgroundColor: colors.canvas }}
            onClick={this.handleStageClick}
          >
            <Layer>
              <Line
                points={[555, 700, 140, 23, 250, 60, 300, 20]}
                stroke={colors.line}
                strokeWidth={dimensions.lineStroke}
                lineCap='round'
                lineJoin='round'
              />

              {
                this.state.points.map(point => <Point x={point.x} y={point.y} key={`point-${point.x}-${point.y}`} />)
              }
            </Layer>
          </Stage>
  
        <footer className="toolbar d-flex justify-content-center align-items-center h-100">
          <Button variant="outline-secondary" disabled={!this.state.points.length} onClick={this.handleClearClick}>
            {'✕ Clear ✕'}
          </Button>
          <Button variant="primary" disabled={!readyToStart} onClick={this.handleNextStepClick}>
            {'> Next step >'}
          </Button>
  
          <Button variant="primary" disabled={!readyToStart} onClick={this.handleAnimateClick}>
            {'⏵ Animate ⏵'}
          </Button>
  
          <Button variant="primary" disabled={!readyToStart} onClick={this.handleResultClick}>
            {'>> Result >>'}
          </Button>
  
          <Button variant="outline-primary" onClick={this.handleRandomizeClick}>
            {'⇋ Randomize ⇋'}
          </Button>
        </footer>
      </Container>
    );
  }
}

export default App;

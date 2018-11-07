import React, { Component } from "react";
import styled from "styled-components";
import Portal from "../Utilities/Portal";
import { absolute } from "../Utilities/absolute";
// import Icon from "./Icon";
import { Card } from "./Card";
import { Transition } from "react-spring";

/* eslint import/prefer-default-export: 0 */
// eslint-disable-next-line
import elevation from "../Utilities/elevation";
import transition from "../Utilities/transition";

export default class Modal extends Component {
  render() {
    const { children, toggle, on } = this.props;
    console.log("toggle", toggle);
    return (
      <Portal>
        <Transition
          items={on}
          from={{ opacity: 0, bgOpacity: 0, y: -50 }}
          enter={{ opacity: 1, bgOpacity: 0.5, y: 0 }}
          leave={{ opacity: 0, bgOpacity: 0, y: 50 }}
        >
          {on =>
            on &&
            (styles => (
              <ModalWrapper>
                <ModalCard
                  style={{
                    transform: `translate3d(0, ${styles.y}px, 0)`,
                    ...styles
                  }}
                >
                  <CloseButton onClick={toggle} />
                  <div>{children}</div>
                </ModalCard>
                <Background
                  style={{ opacity: styles.bgOpacity }}
                  onClick={toggle}
                />
              </ModalWrapper>
            ))
          }
        </Transition>
      </Portal>
    );
  }
}

const ModalWrapper = styled.div`
  ${absolute({})};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalCard = styled.div`
  background: white;
  border-radius: 5px;
  padding: 15px;
  max-width: 320px;
  margin: 0 auto;
  color: #194d33;
  ${elevation[3]};
  ${transition({
    property: "box-shadow"
  })};
  &:hover {
    ${elevation[4]};
  }
  position: relative;
  min-width: 320px;
  z-index: 10;
  margin-bottom: 100px;
`;

const CloseButton = styled.button`
  border: none;
  background: transparent;
  padding: 10px;
  ${absolute({
    y: "top",
    x: "right"
  })};
`;

const Background = styled.div`
  ${absolute({})};
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.5;
`;

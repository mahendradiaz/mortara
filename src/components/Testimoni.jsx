import React, { useEffect, useState } from "react";
import Marquee from "react-marquee-slider";
import styled from "styled-components";
import times from "lodash/times";
import { nanoid } from "nanoid";

import FullWidth from "./Fullwidth";

const Height = styled.div`
  position: relative;
  width: 100%;
  height: ${(props) => (props.height ? props.height + "px" : "auto")};
`;

const Box = styled.div`
  padding: ${(props) => props.scale * 30}px;
`;

const Review = styled.div`
  width: ${(props) => props.scale * 700}px;
  display: flex;
  padding: ${(props) => props.scale * 25}px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.12);
`;

const Avatar = styled.div`
  border-radius: 50%;
  width: ${(props) => props.scale * 140}px;
  height: ${(props) => props.scale * 140}px;
  overflow: hidden;
  flex-shrink: 0;
  margin-right: ${(props) => props.scale * 15}px;

  img {
    max-width: 100%;
  }
`;

const Content = styled.div`
  p {
    margin: 0;
    color: #444;
    font-family: Helvetica, sans-serif;
    font-size: ${(props) => props.scale * 20}px;
    line-height: ${(props) => props.scale * 30}px;
    font-weight: 100;
    text-align: left;
  }
`;

const Testimoni = ({ size, onStartPerformance, onEndPerformance }) => {
  const [key, setKey] = useState(nanoid());

  useEffect(() => {
    setKey(nanoid());
  }, [size, setKey]);

  let scale = 0.5;

  if (size && size.width > 800) {
    scale = 0.65;
  }

  if (size && size.width > 1100) {
    scale = 0.8;
  }

  if (size && size.width > 1400) {
    scale = 1;
  }

  return (
    <FullWidth>
      <Height height={600}>
        <Marquee
          key={key}
          velocity={25}
          scatterRandomly
          minScale={0.7}
          onInit={onStartPerformance}
          onFinish={onEndPerformance}
        >
          {times(1, String).map((id) => (
            <Box key={`marquee-example-review-${id}`} scale={scale}>
              <Review scale={scale}>
                <Avatar scale={scale}>
                  <img src="https://randomuser.me/api/portraits/women/68.jpg" />
                </Avatar>
                <Content scale={scale}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, quae.
                  </p>
                  <div className="rating rating-sm mt-2">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  </div>
                </Content>
              </Review>
            </Box>
          ))}
          {times(1, String).map((id) => (
            <Box key={`marquee-example-review-${id}`} scale={scale}>
              <Review scale={scale}>
                <Avatar scale={scale}>
                  <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="" />
                </Avatar>
                <Content scale={scale}>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi quia magni aperiam voluptas impedit possimus?
                  </p>
                  <div className="rating rating-sm mt-2">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  </div>
                </Content>
              </Review>
            </Box>
          ))}
          {times(1, String).map((id) => (
            <Box key={`marquee-example-review-${id}`} scale={scale}>
              <Review scale={scale}>
                <Avatar scale={scale}>
                  <img src="https://randomuser.me/api/portraits/lego/3.jpg" alt="" />
                </Avatar>
                <Content scale={scale}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui vero nostrum fuga soluta deserunt eius facilis magni adipisci nisi aliquam.
                  </p>
                  <div className="rating rating-sm mt-2">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  </div>
                </Content>
              </Review>
            </Box>
          ))}
          {times(1, String).map((id) => (
            <Box key={`marquee-example-review-${id}`} scale={scale}>
              <Review scale={scale}>
                <Avatar scale={scale}>
                  <img src="https://randomuser.me/api/portraits/women/89.jpg" alt="" />
                </Avatar>
                <Content scale={scale}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ullam, sed ducimus voluptatibus voluptatem quae iste reprehenderit placeat vel, nobis vitae aliquam. Accusamus, praesentium culpa.
                  </p>
                  <div className="rating rating-sm mt-2">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  </div>
                </Content>
              </Review>
            </Box>
          ))}
          {times(1, String).map((id) => (
            <Box key={`marquee-example-review-${id}`} scale={scale}>
              <Review scale={scale}>
                <Avatar scale={scale}>
                  <img src="https://randomuser.me/api/portraits/men/26.jpg" alt="" />
                </Avatar>
                <Content scale={scale}>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga impedit aspernatur iste alias, numquam fugit pariatur ipsa qui consequuntur iusto tempore accusantium expedita quas, recusandae illum, porro labore assumenda repellendus.
                  </p>
                  <div className="rating rating-sm mt-2">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  </div>
                </Content>
              </Review>
            </Box>
          ))}
          {times(1, String).map((id) => (
            <Box key={`marquee-example-review-${id}`} scale={scale}>
              <Review scale={scale}>
                <Avatar scale={scale}>
                  <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="" />
                </Avatar>
                <Content scale={scale}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla necessitatibus accusantium similique voluptatum voluptas ut vitae dicta eveniet? Libero facilis error repellendus ut molestiae, est consectetur magni debitis! Quibusdam, reprehenderit officia! Molestiae dolor sed unde.
                  </p>
                  <div className="rating rating-sm mt-2">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  </div>
                </Content>
              </Review>
            </Box>
          ))}
        </Marquee>
      </Height>
    </FullWidth>
  );
};

// will end in a loop without React.memo
export default Testimoni
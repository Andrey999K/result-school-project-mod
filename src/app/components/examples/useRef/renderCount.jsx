import React, { useEffect, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
const RenderCountExample = () => {
    let renderCount = 0;
    const [otherState, setOtherState] = useState(false);
    const toggleOtherState = () => {
      setOtherState(!otherState);
    };
    useEffect(() => {
      renderCount++;
    });
    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <Divider />
            <p>render count {renderCount}</p>
            <button
              className="btn btn-primary"
              onClick={toggleOtherState}
            >Toggle other state</button>
        </CardWrapper>
    );
};

export default RenderCountExample;

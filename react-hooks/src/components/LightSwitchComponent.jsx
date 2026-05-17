import { useState} from "react";

const LightSwitchComponent = () => {
    const [isLightOn, setIsLightOn] = useState(false);

    const toggleLight = () => {
        setIsLightOn(!isLightOn);
    }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <img
        src={isLightOn ? '/src/assets/lighton.png' : '/src/assets/lightoff.png'}
        alt={isLightOn ? 'Light On' : 'Light Off'}
        style={{ width: '400px', height: '400px' }}
      />

      <br />

      <button onClick={toggleLight}>
        {isLightOn ? 'Turn Off' : 'Turn On'}
      </button>
    </div>
  );
}

export default LightSwitchComponent;
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,

      particles: {
        color: {
          value: ["#3B82F6", "#06B6D4"],
        },

        links: {
          color: "#3B82F6",
          distance: 150,
          enable: true,
          opacity: 0.25,
          width: 1,
        },

        move: {
          enable: true,
          speed: 1,
          outModes: {
            default: "bounce",
          },
        },

        number: {
          value: 50,
        },

        opacity: {
          value: 0.4,
        },

        shape: {
          type: "circle",
        },

        size: {
          value: {
            min: 1,
            max: 4,
          },
        },
      },

      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },

          resize: true,
        },

        modes: {
          repulse: {
            distance: 120,
          },
        },
      },

      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 -z-30"
      options={options}
    />
  );
}

export default ParticlesBackground;

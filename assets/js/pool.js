const { Engine, Render, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;

// Create an engine
const engine = Engine.create();

// Create a renderer
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: window.innerWidth,
    height: window.innerHeight,
    wireframes: false
  }
});

// Create balls
const balls = [];
for (let i = 0; i < 20; i++) {
  console.log("ball");
  const ball = Bodies.circle(100 + i * 70, 100, 30, {
    restitution: 0.9,
    friction: 0.01
  });
  balls.push(ball);
}

// Add balls to the world
World.add(engine.world, balls);

// Create a mouse
const mouse = Mouse.create(render.canvas);
const mouseConstraint = MouseConstraint.create(engine, {
  mouse: mouse,
  constraint: {
    stiffness: 0.2,
    render: {
      visible: false
    }
  }
});

// Add mouse interaction
World.add(engine.world, mouseConstraint);

// Keep the mouse in sync with rendering
render.mouse = mouse;

// Run the engine
Engine.run(engine);

// Run the renderer
Render.run(render);

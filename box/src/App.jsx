function Card({ children, title }) {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );

  /*
   <Card title={"About"}>
        <strong>Hey wazzup</strong>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          tempora pariatur fugit impedit aperiam corrupti rerum odio ex,
          reprehenderit blanditiis! Exercitationem blanditiis soluta eius sit
          officiis. Possimus inventore culpa dolore?{" "}
        </p>
      </Card>
      <Card title={"You"}>
        <div>
          <a href="youtube.com">go to youtube</a>
        </div>
      </Card>
  */
}

function Checklist({ name, isChecked }) {
  return <li>{isChecked ? name + "Checked" : name + "crossed"}</li>;
}

export default function App() {
  return (
    <>
      <div>
        <ul>
          <Checklist name={"Do laundry"} isChecked={true} />
          <Checklist name={"Study"} isChecked={true} />
          <Checklist name={"Eat"} isChecked={false} />
        </ul>
      </div>
    </>
  );
}

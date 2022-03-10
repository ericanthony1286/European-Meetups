import classes from "./MeetupDetail.module.css";
import Card from "../ui/Card";
function MeetupDetail(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <h3>{props.description}</h3>
        </div>
      </Card>
    </li>
  );
}
export default MeetupDetail;

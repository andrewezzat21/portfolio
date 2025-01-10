/* eslint-disable react/prop-types */
import styles from "./Tab.module.css";

export default function Tab(props){
    return(
        props.isActive ? 
        <button onClick={() => {props.toggle(props.id)}} className={styles.activetab}>{props.name}</button> :
        <button onClick={() => {props.toggle(props.id)}} className={styles.tab}>{props.name}</button>
    );
}
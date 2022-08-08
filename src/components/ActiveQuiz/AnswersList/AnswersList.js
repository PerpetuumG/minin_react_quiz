import React from "react";
import classes from "./AnswersList.css";
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswersList = (props) => (
    <ul className={classes.Answerslist}>
        {
            props.answers.map((answer, index) => {
                return (
                    <AnswerItem
                        key={index}
                        answer={answer}
                        onAnswerClick={props.onAnswerClick}
                        state={props.state ? props.state[answer.id] : null}
                    ></AnswerItem>
                )
            })
        }
    </ul>
)
export default AnswersList
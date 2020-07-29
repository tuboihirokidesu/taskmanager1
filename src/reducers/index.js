import { EDIT_TASK } from "../actions/types";
import { CREATE_TASK } from "../actions/types";
import { REMOVE_TASK } from "../actions/types";

const initialState = [
  // {
  //   id: 1,
  //   title: "Learn ReactJS",
  //   description: "Let's learn React is today!!",
  //   status: "In Progress",
  // },
  // {
  //   id: 2,
  //   title: "Learn Redux",
  //   description: "Let's learn Redux is today!!",
  //   status: "Unstarted",
  // },
  // {
  //   id: 3,
  //   title: "Learn MERN",
  //   description: "Let's learn MERN is today!!",
  //   status: "Unstarted",
  // },
];
/***************************************
 * *                              switch versiom
 ****************************************/
//
const tasks = (state = { tasks: initialState }, action) => {
  const { payload } = action;
  switch (action.type) {
    case EDIT_TASK: {
      return {
        tasks: state.tasks.map((task) => {
          if (task.id === payload.id) {
            return Object.assign({}, task, payload.params);
          }
          return task;
        }),
      };
    }
    case CREATE_TASK: {
      return {
        tasks: state.tasks.concat(action.payload),
      };
    }
    case REMOVE_TASK: {
      return {
        tasks: state.tasks.filter((task) => task.id !== action.id),
      };
    }
    default:
      return state;
  }
};
export default tasks;

import React from "react";
import { directors } from "../data";

function Directors() {

    const directorList = directors.map((director) => {
                return <div key = { director.name } >
                    <
                    p > Name: { director.name } < /p> <
                    ul > {
                        director.movies.map((movie) => {
                            return <li key = { movie } > { movie } < /li>} )} <
                                /ul> <
                                /div>
                        })

                        return <div > { /*{code here}*/ } <
                            h1 > Directors Page < /h1> { directorList } <
                            /div>;
                    }

                export default Directors;
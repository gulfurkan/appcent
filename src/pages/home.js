import React, { Component } from 'react'
import Card from "../components/Card.js"
import { Link } from 'react-router-dom'
import * as Constants from '../constants.js'
export default class home extends Component {
    state = {
        loading: true,
        key: "Popular",
        page: 1,
        movies: [],
        totalPages: 500,
        pagePicker: [...Array(500).keys()],
        keyPicker: ["Popular", "Top Rated", "Upcoming"]
    }
    async componentDidMount() {
        const data = await Constants.getMovieList(this.state.key.toLowerCase(), this.state.page);
        this.setState({ movies: data.results, loading: false, totalPages: data.total_pages, pagePicker: [...Array(data.total_pages).keys()] });
    }
    async setPage(newPage) {
        const data = await Constants.getMovieList(this.state.key.toLowerCase(), newPage);
        this.setState({ page: newPage, movies: data.results })
    }
    async setKey(newKey) {
        const data = await Constants.getMovieList(newKey.toLowerCase().replace(/ /g, "_"), 1);
        this.setState({ key: newKey, movies: data.results, totalPages: data.total_pages, pagePicker: [...Array(data.total_pages).keys()] });
    }
    render() {
        return (
            <div>
                <div className="App content-jumbotron"> JUMBOTRON SLOGANI </div>
                <div className="App content-movies">
                    <div style={{ display: "block", marginRight: "3rem" }}>
                        <h2 style={{ color: "black" }}> {this.state.key + " Movies"}</h2>
                        <select onChange={(event) => { this.setKey(event.target.value) }}>
                            {
                                this.state.keyPicker.map(item => {
                                    return <option value={item}>{item}</option>;
                                })
                            }
                        </select>
                    </div>
                    <div className="moviePages">
                        <button onClick={() => { this.setPage(this.state.page == 1 ? this.state.totalPages : this.state.page - 1) }} >{this.state.page == 1 ? this.state.totalPages : this.state.page - 1}</button>
                        <select onChange={(event) => this.setPage(event.target)}>
                            {
                                this.state.pagePicker.map(item => {
                                    return <option value={item + 1}>{item + 1}</option>;
                                })
                            }
                        </select>
                        <button onClick={() => { this.setPage(this.state.page % this.state.totalPages + 1) }} >{this.state.page % this.state.totalPages + 1}</button>
                    </div>
                    <div style={{ overflow: "auto" }}>
                        <div className="row">

                            {this.state.movies.map((item) => {
                                return (
                                    <Link style={{ textDecoration: "none" }} to={"movie/" + item.id}><Card key={item.id} image={item.poster_path} name={item.title} date={item.release_date} score={item.vote_average}></Card></Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

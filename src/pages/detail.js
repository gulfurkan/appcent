import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import './detail.css';
import * as Constants from '../constants'

export default class detail extends Component {
    state = {
        movie: null,
        loading: true,
        credits: null
    }
    async componentDidMount() {
        const id = this.props.match.params.id;
        this.setState({ movie: await Constants.getMovie(id), credits: await Constants.getCrew(id), loading: false });
    }
    render() {
        return (
            <div style={{ overflow: "auto" }}>
                {this.state.loading
                    ? <h1>Loading</h1>
                    : <>
                        <div style={{ overflow: "hidden", backgroundImage: "url(" + Constants.getImage("original", this.state.movie.backdrop_path) + ")" }} className="rowContainer">
                            <div className="wrapper">
                                <img src={Constants.getImage("w300", this.state.movie.poster_path)} alt="" className="detailImage" />
                                <div className="movieScore" style={{ backgroundColor: Constants.calculateRGB(this.state.movie.vote_average) }}>
                                    <h1>{this.state.movie.vote_average}</h1>
                                </div>
                                <div className="details">

                                    <h1>{this.state.movie.title}<span style={{ color: "#CED0D3" }}>{" (" + this.state.movie.release_date + ")"}</span></h1>
                                    <div className="genres">
                                        {this.state.movie.genres.map((genre, index) => {
                                            return index == this.state.movie.genres.length - 1 ? genre.name : genre.name + ", ";
                                        })}
                                    </div>
                                    <p style={{ color: "#CED0D3" }}> {this.state.movie.tagline}</p>
                                    <h3>SUMMARY</h3>
                                    <p>{this.state.movie.overview}</p>
                                    <div className="producers">
                                        {this.state.credits.crew.map(person => {
                                            var job = person.job == "Producer" ? "Producer" : person.job == "Director" ? "Director" : null;
                                            return job ? <h4 style={{ paddingRight: "5rem" }}>{person.name}<br /><span style={{ color: "#CED0D3" }}>{job}</span></h4> : null;
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h1>Top Billed Cast</h1>
                        <div style={{ overflow: "auto" }} className="row">

                            {this.state.credits.cast.map((person, index) => {
                                return (
                                    <Link style={{ textDecoration: "none" }} ><Card key={person.id} image={person.profile_path} name={person.name} date={person.character} score={null} gender={person.gender - 1}></Card></Link>
                                );
                            })}
                        </div>
                    </>
                }
            </div>
        )
    }
}


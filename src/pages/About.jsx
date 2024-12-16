import countryFacts from "../api/countryData.json";
export const About = () => {
    return(
        <section className="section-about container">
            <h2 className="container-title">
                Here are the interesting Facts
                <br/>
                we're proud of
            </h2>
            <div className="gradient-cards">
                {countryFacts.map((country) => {
                    const {id, countryName, capital, population, interestingFact} = country
                    return(
                        <div className="card" key={id}>
                        <div className="container-card bg-blue-box">
                       <p className="card-title">{countryName}</p>
                       <span className="card-description">{capital}</span>
                       <p className="card-description">{population}</p>
                       <p>
                        <span className="card-description">{ interestingFact}</span>
                       </p>
                        </div>
                </div> 
                    )
                })}
                
            
            </div>
        </section>
    )
};
import { ReviewCard, SpecialCard } from "./Card";

const Main = () => {

    return (
        <main>
            <section className='spacer-lg'>
                <div className='container flex-row col-12 spacer-sm'>
                    <h2 className="display">Specials</h2>
                    <button className="specials">Online Menu</button>
                </div>

                <div className='container'>
                    <div className='col-4'>
                        <SpecialCard />
                    </div>
                    <div className='col-4'>
                        <SpecialCard />
                    </div>
                    <div className='col-4'>
                        <SpecialCard />
                    </div>
                </div>
            </section>

            <section className="spacer-lg">
                    <h2 className="display container spacer-sm">Reviews</h2>

                    <div className="container">

                        <div className='col-3'>
                            <ReviewCard/>
                        </div>
                        <div className='col-3'>
                            <ReviewCard/>
                        </div>
                        <div className='col-3'>
                            <ReviewCard/>
                        </div>
                        <div className='col-3'>
                            <ReviewCard/>
                        </div>

                    </div>
            </section>

            <section id="about" className="spacer-lg">
                <div className="container">

                <div className="col-6">
                    <h2 className="display">Little Lemon</h2>
                    <h3 className="subtitle">Chicago</h3>
                    <p>We are a family owned and operated Mediterranean restaurant, focused on traditional recipes served with a modern twist </p>
                </div>
                <div className="col-6">
                    <img src="/Logo.svg" alt="" />
                    <img src="/Logo.svg" alt="" />
                </div>
                </div>
            </section>
        </main>
    );
}

export default Main;
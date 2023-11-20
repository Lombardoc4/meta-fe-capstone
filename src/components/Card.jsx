
export const SpecialCard = () => {

    return (
        <article className="card">
            <img src="/Logo.svg" alt="" />
            <div className="card-content">
                <div className="card-header specials">
                    <h3>title</h3>
                    <p>price</p>
                </div>
                <p>description</p>

                <a className="specials" href="#">Order a Deliver
                    <img src="/Logo.svg" alt="Add to Cart" />
                </a>
            </div>
        </article>
    )
}

export const ReviewCard = () => {

    return (

        <article className="card review-card">
            <img src="/Logo.svg" alt="" />
            <div className="card-content">
                <p className="rating">rating</p>
                <h3 className="specials">Name</h3>
                <p>description</p>
                <a className="specials" href="#">Read more &rarr;</a>
            </div>
        </article>
    )
}
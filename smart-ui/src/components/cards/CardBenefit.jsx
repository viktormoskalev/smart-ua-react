import './card.scss';


function CardBenefit(props) {
    return(
        <div className="card-benefit width-1-2-m width-1-3-l">
        <figure className="card-benefit-image">
    <img src={props.i} alt="benefit"/>
        </figure>

        <p className="card-benefit-title">
            {props.t}
        </p>
        <p className="card-benefit-description">
            {props.d}
        </p>
    
    </div>
   

    );
}

export default CardBenefit;
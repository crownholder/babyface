import promotionBanner from './images/promotion.png'

export default function Promotions(){
    const styleImg = {
        maxWidth: '100%',
        margin: '20px',
        marginLeft: '0px'
    }
    return(
        <div>
            <img
            src={promotionBanner}
            style={styleImg}
            alt="promotion banner"
            />

        </div>

    )

}
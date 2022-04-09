import "./category.css"


function Ofnavbar({imagea,titlen}){
    return (
        <div className="nav">
            <img src={imagea} alt="" />
            <b>{titlen}</b>
        </div>
    )
};

export default Ofnavbar;
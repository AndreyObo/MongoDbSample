import './style.css'

const Footer = (props) => {
  return(
    <div className='footer'>
        <span>{props.Text}</span>
    </div>
  );
}

export default Footer
import{Card} from '../components/Card'


export const Welcome2 = () => {
  return (
    <div className='' style={{}}>
      <div className="row gap-3 welcome2">
      < Card
      img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBf0oIP3jKFyRDmb_P5rRtp__Y1XiQ8lTpjw&usqp=CAU'
      title = 'good girl'
      content ='really a good girl'
      />
      < Card
      img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPjtRXgalQ1xxe__KTN8gwoBa49RG2cEXS0g&usqp=CAU'
      title = 'good girl'
      content ='meet at gym'
      />
      </div>
    </div>
  );
}


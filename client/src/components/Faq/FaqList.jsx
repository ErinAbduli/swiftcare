import { faqs } from '../../assets/data/faqs'
import FaqItem from './FaqItem'
const FaqList = () => {
    return (
        <div className='mt-[38px]'>
            {faqs.map((faq, index) => (
                <FaqItem key={index} faq={faq} />
            ))}
        </div>
    )
}

export default FaqList
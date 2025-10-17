import img1 from '../img/Smoked-Salmon-and-Dill-Yogurt-Burger2-500x500.png'
import img2 from '../img/0623-diana-yen-tomato-recipe-lede.webp'
import img3 from '../img/BA-0819-Go-Live-Grilled-Potato-Salad.webp'
import marg from '../img/MARGHERITA_1200x.webp'
import { TfiTimer } from "react-icons/tfi";
import { TbPercentage20 } from "react-icons/tb";
import { BsBarChart } from "react-icons/bs";
import { IconDiv, DifDiv, WrapperDiv, List } from './Difficulty.styled'

export const Difficulty = ({ level }) => {
    return (
        <>
            <h1 style={{ fontSize: '55px', borderBottom: '3px solid #333', width: '90%', margin: '50px auto', marginTop: '20px'}}>Recipes</h1>
            <List>
                <li>
                    <img src={img1} alt='img1' />
                    <div>
                        <h2>Smoked Salmon Burger</h2>
                        <IconDiv>
                            <TfiTimer fontSize="20px" /><p>20 min</p>
                            <TbPercentage20 fontSize="20px" /><p>6 servings</p>
                            <BsBarChart fontSize="20px" /><p>210 calories</p>
                        </IconDiv>
                        <WrapperDiv>
                            <h2 style={{ position: "relative", top: '11px' }}>Difficulty</h2>
                            <DifDiv>
                                <button style={{ backgroundColor: level[0] === 0 ? 'green' : '#FFF8DC' }}>Easy</button>
                                <button style={{ backgroundColor: level[0] === 1 ? 'yellow' : '#FFF8DC' }}>Medium</button>
                                <button style={{ backgroundColor: level[0] === 3 ? 'red' : '#FFF8DC' }}>Hard</button>
                            </DifDiv>
                        </WrapperDiv>
                    </div>
                </li>
                <li>
                    <img src={img2} alt='img2' />
                    <div>
                        <h2>Tomotoes With Creamy Feta</h2>
                        <IconDiv>
                            <TfiTimer fontSize="20px" /><p>15 min</p>
                            <TbPercentage20 fontSize="20px" /><p>3 servings</p>
                            <BsBarChart fontSize="20px" /><p>600 calories</p>
                        </IconDiv>
                        <WrapperDiv>
                            <h2 style={{ position: "relative", top: '11px' }}>Difficulty</h2>
                            <DifDiv>
                                <button style={{ backgroundColor: level[1] === 0 ? 'green' : '#FFF8DC' }}>Easy</button>
                                <button style={{ backgroundColor: level[1] === 1 ? 'yellow' : '#FFF8DC' }}>Medium</button>
                                <button style={{ backgroundColor: level[1] === 3 ? 'red' : '#FFF8DC' }}>Hard</button>
                            </DifDiv>
                        </WrapperDiv>
                    </div>
                </li>
                <li>
                    <img src={img3} alt='img3' />
                    <div>
                        <h2>Spicy Potato Salad</h2>
                        <IconDiv>
                            <TfiTimer fontSize="20px" /><p>30 min</p>
                            <TbPercentage20 fontSize="20px" /><p>2 servings</p>
                            <BsBarChart fontSize="20px" /><p>320 calories</p>
                        </IconDiv>
                        <WrapperDiv>
                            <h2 style={{ position: "relative", top: '11px' }}>Difficulty</h2>
                            <DifDiv>
                                <button style={{ backgroundColor: level[2] === 0 ? 'green' : '#FFF8DC' }}>Easy</button>
                                <button style={{ backgroundColor: level[2] === 1 ? 'yellow' : '#FFF8DC' }}>Medium</button>
                                <button style={{ backgroundColor: level[2] === 3 ? 'red' : '#FFF8DC' }}>Hard</button>
                            </DifDiv>
                        </WrapperDiv>
                    </div>
                </li>
                <li>
                    <img src={marg} alt='img4' />
                    <div>
                        <h2>Pizza Margarita</h2>
                        <IconDiv>
                            <TfiTimer fontSize="20px" /><p>40 min</p>
                            <TbPercentage20 fontSize="20px" /><p>4 servings</p>
                            <BsBarChart fontSize="20px" /><p>700 calories</p>
                        </IconDiv>
                        <WrapperDiv>
                            <h2 style={{ position: "relative", top: '11px' }}>Difficulty</h2>
                            <DifDiv>
                                <button style={{ backgroundColor: level[3] === 0 ? 'green' : '#FFF8DC' }}>Easy</button>
                                <button style={{ backgroundColor: level[3] === 1 ? 'yellow' : '#FFF8DC' }}>Medium</button>
                                <button style={{ backgroundColor: level[3] === 3 ? 'red' : '#FFF8DC' }}>Hard</button>
                            </DifDiv>
                        </WrapperDiv>
                    </div>
                </li>
            </List>
        </>
    )
}

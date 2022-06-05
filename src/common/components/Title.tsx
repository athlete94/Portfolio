import s from './Title.module.css'

type TitlePropsType = {
    title: string,
    overTitle: string
}

const Title = (props: TitlePropsType) => {
    return (
        <div>
            <p><span className={s.overTitle}>{props.overTitle}</span></p>
            <div className={s.title}>
                <h2>{props.title}</h2>
            </div>
        </div>
    );
};

export default Title;
import style from '../OpenPage.module.css';

export default function Page() {
    return (
        <div className={style.bookPage}>
            <div className={style.leftPage}>
                <h2>タイトル</h2>
                <p>本の説明やテキストがここに入ります。</p>
            </div>
            <div className={style.rightPage}>
                右ページ
            </div>
        </div>
    );
}

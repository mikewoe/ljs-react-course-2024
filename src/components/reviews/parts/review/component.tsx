import {TNReview, TNUser} from "../../../../types/types.ts";
import {useCallback, useState} from "react";
import {EditReviewContainer} from "../edit-review/container.tsx";

export const Review = ({review, user, restaurantId}: {review: TNReview, user: TNUser, restaurantId: string}) => {
    const [mode, setMode] = useState('view');

    const changeMode = useCallback(() => {
        setMode(mode === 'view' ? 'edit' : 'view')
    }, [mode]);

    if (mode === 'view') {
        return (
            <div key={review.id} onClick={changeMode}>
                {`${user.name}: ${review.text} - ${review.rating}`}
            </div>
        )
    }

    return (
        <EditReviewContainer restaurantId={restaurantId} review={review} user={user} onSubmit={changeMode}/>
    );
}
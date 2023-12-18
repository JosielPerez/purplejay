//@ts-nocheck
import React from 'react'

function Row({src1, name1, desc1, isDone1, src2, name2, desc2, isDone2}) {
  return (
<div>
    <div className={styles.achievement_name}>
        <p className={styles.name}>{name1}</p>
        <p className={styles.name}>{name2}</p>
    </div>
    <div className={styles.achievement_row}>
        {isAchievementTrue(src1, isDone1)}
        {isDescriptionTrue(desc1, isDone1)}
        {isAchievementTrue(src2, isDone2)}
        {isDescriptionTrue(desc2, isDone2)}
    </div>
</div>
  )
}

export default Row
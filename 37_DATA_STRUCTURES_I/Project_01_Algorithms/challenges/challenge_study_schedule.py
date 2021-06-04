NO_TARGET = 0
COUNT_UP = 1


def study_schedule(start_time, end_time, target_time):
    if not (target_time) or not (start_time):
        return NO_TARGET

    online_by_hour = {}

    for index in range(len(start_time)):
        student_start = start_time[index]
        student_stop = end_time[index]

        existing_counter = (
            online_by_hour[target_time] if target_time in online_by_hour else 0
        )

        if (target_time <= student_stop) and (student_start <= target_time):
            online_by_hour[target_time] = existing_counter + COUNT_UP

    return online_by_hour[target_time]

# How can you make this more scalable and reusable later?
def find_armstrong_numbers(numbers):
    answer_arr = []
    for i in numbers:
        list_of_nums = list(str(i))
        result = 0
        for j in list_of_nums:
            power_of = int(j) ** len(list_of_nums)
            result += power_of
        if result == i:
            answer_arr.append(result)
    return answer_arr
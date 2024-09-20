export function processStatus(status) {
    const array = {
        0: '新建', 1: '待录入信息', 2: '待编制会议纪要', 3: '待审核会议纪要', 4: '待审批会议纪要', 5: '会议完成'
    }
    return array[status]
}
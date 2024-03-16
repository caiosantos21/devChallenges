/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {



    const handleSum = (a1: ListNode, a2: ListNode, extra: number) => {
        const node = new ListNode()

        const sum = a1.val + a2.val + extra
        const newExtra = sum >= 10 ? 1 : 0

        node.val = sum >= 10 ? sum - 10 : sum

        console.log(a1.val, a2.val, sum, newExtra, node.val)

        if (a1.next && a2.next) {
            node.next = handleSum(a1.next, a2.next, newExtra)
        }

        if (a1.next && !a2.next) {
            const aux = new ListNode()
            node.next = handleSum(a1.next, aux, newExtra)
        }

        if (!a1.next && a2.next) {
            const aux = new ListNode()
            node.next = handleSum(aux, a2.next, newExtra)
        }
        if (!a1.next && !a2.next && newExtra>0) {
            const aux = new ListNode()
            node.next = handleSum(aux, aux, newExtra)
        }

        return node
    }

    return handleSum(l1, l2, 0)
};
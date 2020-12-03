const addTwoNumbers = (l1, l2) =>  {
    let result = new ListNode(0, null);
    let carry = 0;
    //pointing at the start of the result ListNode
    let start = result;
    //keep looping while at least one of l1, l2 and carry exist
    while (l1 || l2 || carry){
        //when list is not null, read the value, else set it to 0
        l1Value = ((l1 == null) ? 0 : l1.val)
        l2Value = ((l2 == null) ? 0 : l2.val)

        //adding two numbers with carry
        if (l1Value + l2Value + carry >= 10){
            result.val = (l1Value + l2Value + carry-10);
            carry = 1;
        }
        else {
            result.val = (l1Value + l2Value + carry);
            carry = 0; 
        }
        
        //proceed to next node when there is one
        l1 = ((l1 == null) ? l1 : l1.next)
        l2 = ((l2 == null) ? l2 : l2.next)

        //generates next node for result when there is node or carry left
        if (l1 || l2 || carry){
            result.next = new ListNode(0, null);
            result = result.next;
        }
    }
    return start;
};
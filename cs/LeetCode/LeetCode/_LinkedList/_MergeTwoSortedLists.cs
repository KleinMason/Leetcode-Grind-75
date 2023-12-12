namespace LeetCode._LinkedList
{
    internal class _MergeTwoSortedLists
    {
        internal class ListNode
        {
            public int val;
            public ListNode next;
            public ListNode(int val = 0, ListNode next = null)
            {
                this.val = val;
                this.next = next;
            }
        }

        /**** Iterative ****/
        //public ListNode MergeTwoLists(ListNode list1, ListNode list2)
        //{
        //    if (list1 == null) return list2;
        //    if (list2 == null) return list1;

        //    ListNode dummy = new ListNode();
        //    ListNode current = dummy;

        //    while (list1 != null && list2 != null)
        //    {
        //        if (list1.val < list2.val)
        //        {
        //            current.next = list1;
        //            list1 = list1.next;
        //        }
        //        else
        //        {
        //            current.next = list2;
        //            list2 = list2.next;
        //        }
        //        current = current.next;
        //    }

        //    if (list1 != null)
        //        current.next = list1;
        //    else
        //        current.next = list2;

        //    return dummy.next;
        //}

        /**** Recursive ****/
        public ListNode MergeTwoLists(ListNode list1, ListNode list2)
        {
            if (list1 == null)
                return list2;
            if (list2 == null)
                return list1;
            if (list1.val <= list2.val)
            {
                list1.next = MergeTwoLists(list1.next, list2);
                return list1;
            }
            else
            {
                list2.next = MergeTwoLists(list1, list2.next);
                return list2;
            }

        }

    }
}

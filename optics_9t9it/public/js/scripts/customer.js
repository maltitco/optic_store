async function set_branch(frm) {
  if (frm.doc.__islocal) {
    const { message: branch } = await frappe.call({
      method: 'optic_store.api.customer.get_user_branch',
    });
    console.log(branch);
    frm.set_value('branch', branch);
  }
}

export default {
  onload: set_branch,
};

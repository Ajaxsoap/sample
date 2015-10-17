// Branch Collection
Branches = new orion.collection('branches', {
  singularName: 'branch',
  pluralName: 'branches',
  link: {
    title: 'Branch'
  },
  tabular: {
    columns: [
      {data: "branch", title: "Branch"}
    ]
  }
});

Branches.attachSchema(new SimpleSchema({
  branch: {
    type: String,
    label: "Branch Name"
  },
  createdBy: orion.attribute('createdBy')
}));
